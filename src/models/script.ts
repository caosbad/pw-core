import { HashType, CKBModel } from '../interfaces';
import { scriptToHash } from '@nervosnetwork/ckb-sdk-utils';
// import { SerializeScript } from '@ckb-lumos/types/lib/core';
import {
  Address,
  AddressType,
  AddressPrefix,
  getDefaultPrefix,
} from './address';
// import { Blake2bHasher } from '../hasher';
// import { Reader } from 'ckb-js-toolkit';
import { generateAddress, LumosConfigs } from '../utils';
import { validators, transformers } from 'ckb-js-toolkit';

export class Script implements CKBModel {
  constructor(
    public codeHash: string,
    public args: string,
    public hashType: HashType
  ) {}

  sameWith({ args, codeHash, hashType }: Script) {
    return (
      this.args === args &&
      this.codeHash === codeHash &&
      this.hashType === hashType
    );
  }

  validate(): boolean {
    validators.ValidateScript(transformers.TransformScript(this));
    return true;
  }

  serializeJson(): object {
    return {
      code_hash: this.codeHash,
      args: this.args,
      hash_type: this.hashType,
    };
  }

  toHash(): string {
    return scriptToHash(this);
    /*
    const serializedScript = SerializeScript(this.serializeJson());
    return new Blake2bHasher()
      .hash(new Reader(serializedScript))
      .serializeJson();
      */
  }

  toAddress(prefix: AddressPrefix = getDefaultPrefix()): Address {
    const address = generateAddress(this.serializeJson(), {
      config: LumosConfigs[prefix],
    });

    return new Address(address, AddressType.ckb);
  }
}
