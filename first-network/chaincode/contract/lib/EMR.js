'use strict';

class EMR {

  /**
   *
   * EMR
   *
   * Constructor for a EMR object. EMR has a MRN and other relevant fields
   *   
   * @param mrn - the unique Id which corresponds to a emr
   * @param date //date created
   * @param pid      //patient id
   * @param cid      //consultant id
   * @param history      // pre diagnosis note : patient conditions
   * @param meds      // meds patient is on
   * @param allergies
   * @param shist      //social history;
   * @param bt      //body temp
   * @param bp      //blood pressure
   * @param hr      //heart rate
   * @param rr      // respiratory rate
   * @param extra      // notes on skin, heart, lungs
   * @param labs      // past or prescribed tests 
   * @param assessment      
   * @param plan   // further steps 
   * @returns - emr object
   */
  
   constructor(mrn, date, pid, cid, history, meds, allergies, shist, bt, bp, hr, rr, extra, labs, assessment, plan) {

    if (this.validateEmr(mrn)) {

      this.mrn = mrn;
      this.date = date;
      this.pid = pid;
      this.cid = cid;
      this.history = history;
      this.meds = meds;
      this.allergies = allergies
      this.shist = shist;
      this.bt = bt;
      this.bp = bp;
      this.hr = hr;
      this.rr = rr;
      this.extra = extra;
      this.labs = labs;
      this.assessment = assessment;
      this.plan = plan;
      // initialize an array of trusted doctors
      this.trustedDocs = [];

      /*
      if (this.__isContract) {
        delete this.__isContract;
      }
      if (this.name) {
        delete this.name;
      }
      */

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