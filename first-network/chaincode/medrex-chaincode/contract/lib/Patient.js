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
  async validatePatient(cnic) {
    //PatientId error checking here, i.e. valid cnic
    if (cnic) {
      return true;
    } else {
      return false;
    }
  }
}

export default Patient;