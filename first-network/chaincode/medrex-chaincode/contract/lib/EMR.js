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
  constructor(mrn , pid, cid, history, meds, allergies, shist, bt, bp, hr, rr, extra, labs, assesment, plan) {

    if (this.validateEmr(mrn)) {

      this.mrn = mrn;
      this.pid = pid;
      this.cid = cid;
      this.history = history;
      this.meds = meds;
      this.allergies = allergies;
      this.shist = shist;
      this.bt = bt;
      this.bp = bp;
      this.hr = hr;
      this.rr = rr;
      this.extra = extra;
      this.mrn = mrn;
      this.labs = labs;
      this.assesment = assesment;
      this.plan = plan;

      if (this.__isContract) {
        delete this.__isContract;
      }
      if (this.name) {
        delete this.name;
      }
      return this;

    } else{
      throw new Error('the CNIC is not valid.');
    } 
  }

  /**
   *
   * validateEMR
   *
   *  
   * @param cnic - an array of choices 
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