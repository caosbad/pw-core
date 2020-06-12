import { DepType, HashType } from './interfaces';
import { OutPoint, CellDep, Script } from './models';

export const ECDSA_WITNESS_LEN = 172;
export const DAO_WITHDRAW_2_WITNESS_LEN = 196;

export const DUMMY_ADDRESSES = {
  main: 'ckb1qyqy5vmywpty6p72wpvm0xqys8pdtxqf6cmsr8p2l0',
  ckb_testnet: 'ckt1qyqwknsshmvnj8tj6wnaua53adc0f8jtrrzqz4xcu2',
  ckb_dev: 'ckt1qyqwknsshmvnj8tj6wnaua53adc0f8jtrrzqz4xcu2',
};

export const CHAIN_SPECS = {
  Lina: {
    table: new CellDep(
      DepType.code,
      new OutPoint(
        '0x07a824df0419adf4c92ca563085525e7224b014ecc97cf3de684dd7b57c05856',
        '0x0'
      )
    ),
    daoType: {
      cellDep: new CellDep(
        DepType.code,
        new OutPoint(
          '0x15fb8111fc78fa36da6af96c45ac4714cc9a33974fdae13cc524b29e1a488c7f',
          '0x2'
        )
      ),
      script: new Script(
        '0x82d76d1b75fe2fd9a27dfbaa65a039221a380d76c926f378d3f81cf3e7e13f2e',
        '0x',
        HashType.type
      ),
    },
    defaultLock: {
      cellDep: new CellDep(
        DepType.depGroup,
        new OutPoint(
          '0x84dcb061adebff4ef93d57c975ba9058a9be939d79ea12ee68003f6492448890',
          '0x0'
        )
      ),
      script: new Script(
        '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8',
        '0x',
        HashType.type
      ),
    },
    multiSigLock: {
      cellDep: new CellDep(
        DepType.depGroup,
        new OutPoint(
          '0x84dcb061adebff4ef93d57c975ba9058a9be939d79ea12ee68003f6492448890',
          '0x1'
        )
      ),
      script: new Script(
        '0x5c5069eb0857efc65e1bca0c07df34c31663b3622fd3876c876320fc9634e2a8',
        '0x',
        HashType.type
      ),
    },
    pwLock: {
      cellDep: new CellDep(
        DepType.code,
        new OutPoint(
          '0x07a824df0419adf4c92ca563085525e7224b014ecc97cf3de684dd7b57c05856',
          '0x0'
        )
      ),
      script: new Script(
        '0x07a824df0419adf4c92ca563085525e7224b014ecc97cf3de684dd7b57c05856',
        '0x',
        HashType.type
      ),
    },
  },

  Aggron: {
    table: new CellDep(
      DepType.code,
      new OutPoint(
        '0x07a824df0419adf4c92ca563085525e7224b014ecc97cf3de684dd7b57c05856',
        '0x0'
      )
    ),
    daoType: {
      cellDep: new CellDep(
        DepType.code,
        new OutPoint(
          '0x15fb8111fc78fa36da6af96c45ac4714cc9a33974fdae13cc524b29e1a488c7f',
          '0x2'
        )
      ),
      script: new Script(
        '0x82d76d1b75fe2fd9a27dfbaa65a039221a380d76c926f378d3f81cf3e7e13f2e',
        '0x',
        HashType.type
      ),
    },
    defaultLock: {
      cellDep: new CellDep(
        DepType.depGroup,
        new OutPoint(
          '0x84dcb061adebff4ef93d57c975ba9058a9be939d79ea12ee68003f6492448890',
          '0x0'
        )
      ),
      script: new Script(
        '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8',
        '0x',
        HashType.type
      ),
    },
    multiSigLock: {
      cellDep: new CellDep(
        DepType.depGroup,
        new OutPoint(
          '0x84dcb061adebff4ef93d57c975ba9058a9be939d79ea12ee68003f6492448890',
          '0x1'
        )
      ),
      script: new Script(
        '0x5c5069eb0857efc65e1bca0c07df34c31663b3622fd3876c876320fc9634e2a8',
        '0x',
        HashType.type
      ),
    },
    pwLock: {
      cellDep: new CellDep(
        DepType.code,
        new OutPoint(
          '0x07a824df0419adf4c92ca563085525e7224b014ecc97cf3de684dd7b57c05856',
          '0x0'
        )
      ),
      script: new Script(
        '0xac8a4bc0656aeee68d4414681f4b2611341c4f0edd4c022f2d250ef8bb58682f',
        '0x',
        HashType.type
      ),
    },
  },
  // dev - lay2.ckb.dev
  Lay2: {
    table: new CellDep(
      DepType.code,
      new OutPoint(
        '0xa563884b3686078ec7e7677a5f86449b15cf2693f3c1241766c6996f206cc541',
        '0x3'
      )
    ),
    daoType: {
      cellDep: new CellDep(
        DepType.code,
        new OutPoint(
          '0xa563884b3686078ec7e7677a5f86449b15cf2693f3c1241766c6996f206cc541',
          '0x2'
        )
      ),
      script: new Script(
        '0x82d76d1b75fe2fd9a27dfbaa65a039221a380d76c926f378d3f81cf3e7e13f2e',
        '0x',
        HashType.type
      ),
    },
    defaultLock: {
      cellDep: new CellDep(
        DepType.depGroup,
        new OutPoint(
          '0xace5ea83c478bb866edf122ff862085789158f5cbff155b7bb5f13058555b708',
          '0x0'
        )
      ),
      script: new Script(
        '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8',
        '0x',
        HashType.type
      ),
    },
    multiSigLock: {
      cellDep: new CellDep(
        DepType.depGroup,
        new OutPoint(
          '0xace5ea83c478bb866edf122ff862085789158f5cbff155b7bb5f13058555b708',
          '0x1'
        )
      ),
      script: new Script(
        '0x5c5069eb0857efc65e1bca0c07df34c31663b3622fd3876c876320fc9634e2a8',
        '0x',
        HashType.type
      ),
    },
    pwLock: {
      cellDep: new CellDep(
        DepType.code,
        new OutPoint(
          '0x7822910729c566c0f8a3f4bb9aee721c5da2808f9a4688e909c0119b0ab820d7',
          '0x0'
        )
      ),
      script: new Script(
        '0xc9eb3097397836e4d5b8fabed3c0cddd14fefe483caf238ca2e3095a111add0b',
        '0x',
        HashType.type
      ),
    },
  },
};
