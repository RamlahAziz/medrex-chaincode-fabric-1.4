'use strict';

class Patient {
  /**
   *
   * Patient
   *
   * Constructor for a Patient object. Patient has a patientId and registrar that the
   * patient is . 
   *  
   * @param items - an array of choices 
   * @param cnic - the unique Id which corresponds to a registered patient
   * @returns - registrar object
   */
  constructor(cnic, firstName, lastName, sex, dob, email) {

    if (this.validatePatient(cnic)) {

      this.cnic = cnic;
      this.firstName = firstName;
      this.lastName = lastName;
      this.sex = sex;
      this.dob = dob;
      this.email = email;
      this.type = 'patient';

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
   * validate Patient
   *
   *  
   * @param cnic - patient cnic
   * @returns - yes if valid Patient, no if invalid
   */
<<<<<<< HEAD
  async validatePatient(cnic) {
    //PatientId error checking here, i.e. valid cnic
=======
  async validateEMR(cnic) {
    //PatientId error checking here, i.e. check if valid drivers License, or state ID
>>>>>>> 39300e498b33f2367cd42004caa435ce9e56c9b2
    if (cnic) {
      return true;
    } else {
      return false;
    }
  }
}

export default Patient;