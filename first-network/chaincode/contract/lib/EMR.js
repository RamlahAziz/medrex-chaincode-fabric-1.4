'use strict';

class EMR {

  /**
   *
   * EMR
   *
   * Constructor for a EMR object. EMR has a MRN and other relevant fields
   *  
   * @param items - an array of choices 
   * @param mrn - the unique Id which corresponds to a emr
   * @returns - registrar object
   */
  
   constructor(mrn, date, pid, cid, history, meds, allergies, shist, bt, bp, hr, rr, extra, labs, assessment, plan) {

    if (this.validateEmr(mrn)) {

      this.mrn = mrn;
      //date created
      this.date = date;
      //patient id
      this.pid = pid;
      //consultant id
      this.cid = cid;
      // pre diagnosis note : patient conditions
      this.history = history;
      // meds patient is on
      this.meds = meds;
      this.allergies = allergies
      //social history;
      this.shist = shist;
      //body temp
      this.bt = bt;
      //blood pressure
      this.bp = bp;
      //heart rate
      this.hr = hr;
      // respiratory rate
      this.rr = rr;
      // notes on skin, heart, lungs
      this.extra = extra;
      //this.mrn = mrn;
      // past or prescribed tests 
      this.labs = labs;
      this.assessment = assessment;
      // further steps 
      this.plan = plan;
      // array of trusted doctors
      this.trustedDocs = [];

      if (this.__isContract) {
        delete this.__isContract;
      }
      if (this.name) {
        delete this.name;
      }
      return this;

    } else{
      throw new Error('the MRN is not valid.');
    } 
  }

  /**
   *
   * validateEMR
   *
   *  
   * @param mrn - mrn of document
   * @returns - yes if valid EMR, no if invalid
   */
  async validateEmr(mrn) {
    //mrn error checking here, i.e. check if mrn or not
    if (mrn) {
      return true;
    } else {
      return false;
    }
  }
}

export default Patient;