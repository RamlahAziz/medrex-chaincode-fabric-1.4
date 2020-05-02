'use strict';

class Patient {
  /**
   *
   * Patient
   *
   * Constructor for a Patient object. Patient has a patientId and registrar that the
   * patient is . 
   *  
   * @param cnic - patient's cnic
   * @param firstName - first name of patient
   * @param lastName - last name of patient
   * @param sex sex of patient
   * @param dob dd/mm/yyyy
   * @param email valid email address
   * @returns - nothing, creates a patient object. in fact idk why we even have this file.
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

      //if (this.__isContract) {
      //  delete this.__isContract;
      //}
      //if (this.name) {
      //  delete this.name;
      //}
      return this;

    } else {
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