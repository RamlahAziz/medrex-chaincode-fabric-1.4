/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

//import Hyperledger Fabric 1.4 SDK
const { Contract } = require('fabric-contract-api');
const path = require('path');
const fs = require('fs');

//import our file which contains our constructors and auxiliary function
let Patient = require('./Patient.js');
let EMR = require('./EMR.js');
let Doctor = require('./Doctor.js');

class medrexContract extends Contract{

    //init method called when the contract is instantiated on the peer
    /**
     * Instantiate to perform any setup of the ledger that might be required.
     * @param {Context} ctx the transaction context
     */
    async initLedger(ctx) {

        console.log('instantiate was called!');
    
        //create patients
        let patient1 = await new Patient('1234567890123', 'Zeyad', 'Ahmed', 'M', '05/25/1997', 'zeylmnop97@gmail.com');
        let patient2 = await new Patient('2345678901234', 'Tasneem', 'Ishtiaq', 'F', '09/28/1970', 'tasneemishtiaq@gmail.com');

        //create doctors
        let doctor1 = await new Dcotor('3456789012345', 'Ramlah', 'Aamir', 'F', '11/07/1996', 'raziz.bese16seecs@seecs.edu.pk');
        let doctor2 = await new Dcotor('4567890123456', 'Irina', 'Ishtiaq', 'F', '11/27/2012', 'iishtiaq.bese16seecs@seecs.edu.pk');
    
      }


    /**
     *
     * createPatient
     *
     * Creates a patient in the world state, based on the args given.
     *  
     * @param cnic - patient's cnic
     * @param firstName - first name of patient
     * @param lastName - last name of patient
     * @param sex sex of patient
     * @param dob dd/mm/yyyy
     * @param email valid email address
     * @returns - nothing - but updates the world state with a voter
     */
    async createPatient(ctx, cnic, firstName, lastName, sex, dob, email) {

      console.info('============= START : Create Vehicle ===========');

      //checks if patient exists in ledger
      const patientAsBytes = await ctx.stub.getState(cnic); // get the patient from chaincode state
      console.log(patientAsBytes.toString());

      //if patient does not already exist
      if(!patientAsBytes || patientAsBytes.length===0){
        //create a new patient
        let newPatient = await new Patient(cnic, firstName, lastName, sex, dob, email);

        //update state with new patient
        await ctx.stub.putState(newPatient.cnic, Buffer.from(JSON.stringify(newPatient)));
        console.info('============= END : Create Patient ===========');

      }
      // if patient cnic already exists 
      else{
        throw new Error(`${cnic} already exists`);
      }
    

    }

}

export default medrexContract;

