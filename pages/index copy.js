import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';

import { Tab, Tabs, RadioGroup, Radio, FormGroup, InputGroup, NumericInput } from "@blueprintjs/core";
import "../node_modules/@blueprintjs/core/lib/css/blueprint.css";
import "../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css";
import "../node_modules/normalize.css/normalize.css";
import {
    Address,
    BaseAddress,
    MultiAsset,
    Assets,
    ScriptHash,
    Costmdls,
    Language,
    CostModel,
    AssetName,
    TransactionUnspentOutput,
    TransactionUnspentOutputs,
    TransactionOutput,
    Value,
    TransactionBuilder,
    TransactionBuilderConfigBuilder,
    TransactionOutputBuilder,
    LinearFee,
    BigNum,
    BigInt,
    TransactionHash,
    TransactionInputs,
    TransactionInput,
    TransactionWitnessSet,
    Transaction,
    PlutusData,
    PlutusScripts,
    PlutusScript,
    PlutusList,
    Redeemers,
    Redeemer,
    RedeemerTag,
    Ed25519KeyHashes,
    ConstrPlutusData,
    ExUnits,
    Int,
    NetworkInfo,
    EnterpriseAddress,
    TransactionOutputs,
    hash_transaction,
    hash_script_data,
    hash_plutus_data,
    ScriptDataHash, Ed25519KeyHash, NativeScript, StakeCredential
} from "@emurgo/cardano-serialization-lib-asmjs"
export default function Home() {
   let API

    /**
     * START WALLET SETUP
     */
    
    /** 
     * {
            selectedTabId: "1",
            whichWalletSelected: "ccvault",
            walletFound: false,
            walletIsEnabled: false,
            walletName: undefined,
            walletIcon: undefined,
            walletAPIVersion: undefined,

            networkId: undefined,
            Utxos: undefined,
            CollatUtxos: undefined,
            balance: undefined,
            changeAddress: undefined,
            rewardAddress: undefined,
            usedAddress: undefined,

            txBody: undefined,
            txBodyCborHex_unsigned: "",
            txBodyCborHex_signed: "",
            submittedTxHash: "",

            addressBech32SendADA: "addr_test1qrt7j04dtk4hfjq036r2nfewt59q8zpa69ax88utyr6es2ar72l7vd6evxct69wcje5cs25ze4qeshejy828h30zkydsu4yrmm",
            lovelaceToSend: 3000000,
            assetNameHex: "4c494645",
            assetPolicyIdHex: "ae02017105527c6c0c9840397a39cc5ca39fabe5b9998ba70fda5f2f",
            assetAmountToSend: 5,
            addressScriptBech32: "addr_test1wpnlxv2xv9a9ucvnvzqakwepzl9ltx7jzgm53av2e9ncv4sysemm8",
            datumStr: "12345678",
            plutusScriptCborHex: "4e4d01000033222220051200120011",
            transactionIdLocked: "",
            transactionIndxLocked: 0,
            lovelaceLocked: 3000000,
            manualFee: 900000,

        }
    */
     const [selectedTabId, setselectedTabId] = useState('1')
     const [whichWalletSelected, setwhichWalletSelected] = useState('ccvault')
     const [walletFound, setwalletFound] = useState(false)
     const [walletIsEnabled, setwalletIsEnabled] = useState(false)
      const [walletName, setwalletName] = useState(undefined)
      const [walletIcon, setwalletIcon] = useState(undefined)
      const [walletAPIVersion, setwalletAPIVersion] = useState(undefined)
      const [networkId, setnetwrokId] = useState(undefined)
      const [Utxos, setUtxos] = useState(undefined)
      const [CollatUtxos, setCollatUtxos] = useState(undefined)
      const [balance, setbalance] = useState(undefined)
      const [changeAddress, setchangeAddress] = useState(undefined)
      const [rewardAddress, setrewardAddress] = useState(undefined)
      const [usedAddress, setusedAddress] = useState(undefined)
      const [txBody, settxBody] = useState(undefined)
      const [txBodyCborHex_unsigned, settxBodyCborHex_unsigned] = useState("")
      const [txBodyCborHex_signed, settxBodyCborHex_signed] = useState("")
      const [submittedTxHash, setsubmittedTxHash] = useState("")
      const [addressBech32SendADA, setaddressBech32SendADA] = useState("addr_test1qrt7j04dtk4hfjq036r2nfewt59q8zpa69ax88utyr6es2ar72l7vd6evxct69wcje5cs25ze4qeshejy828h30zkydsu4yrmm")
      const [lovelaceToSend, setlovelaceToSend] = useState(3000000)
      const [assetNameHex, setassetNameHex] = useState("4c494645")
      const [assetPolicyIdHex, setassetPolicyIdHex] = useState("ae02017105527c6c0c9840397a39cc5ca39fabe5b9998ba70fda5f2f")
      const [assetAmountToSend, setassetAmountToSend] = useState(5)
      const [addressScriptBech32, setaddressScriptBech32] = useState("addr_test1wpnlxv2xv9a9ucvnvzqakwepzl9ltx7jzgm53av2e9ncv4sysemm8")
      const [datumStr, setdatumStr] = useState("12345678")
      const [plutusScriptCborHex, setplutusScriptCborHex] = useState("4e4d01000033222220051200120011")
      const [transactionIdLocked, settransactionIdLocked] = useState("")
      const [transactionIndxLocked, settransactionIndxLocked] = useState(0)
      const [lovelaceLocked, setlovelaceLocked] = useState(3000000)
      const [manualFee, setmanualFee] = useState(900000)
      
     

  return (
    <div className={styles.container}>
      <Head>
        <title>Test dApp + Cardano Wallet Conectoe</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Test dApp + Cardano Wallet Conector
        </h1>

        <p className={styles.description}>
          This is a simple example of a dApp + Cardano Wallet Conector.
        </p>

      </main>


    </div>
  )
}
