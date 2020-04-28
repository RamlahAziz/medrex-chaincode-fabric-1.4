'use strict';

class Doctor {
  /**
   *
   * Doctor
   *
   * Constructor for a Doctor object. Doctor has a doctorId and registrar that the
   * doctor is . 
   *  
   * @param items - an array of choices 
   * @param cnic - the unique Id which corresponds to a registered doctor
   * @returns - registrar object
   */
  constructor(cnic, firstName, lastName, sex, dob, email) {

    if (this.validateDoctor(cnic)) {

      this.cnic = cnic;
      this.firstName = firstName;
      this.lastName = lastName;
      this.sex = sex;
      this.dob = dob;
      this.email = email;
      this.type = 'doctor';

      if (this.__isContract) {
        delete this.__isContract;
      }
      if (this.name) {
        delete this.name;
      }
      return this;

    } else{
      throw new Error('the cnic is not valid.');
    } 
  }

  /**
   *
   * validate Doctor
   *
   *  
   * @param cnic - an array of choices 
   * @returns - yes if valid Doctor, no if invalid
   */
  async validateDoctor(cnic) {
    //DoctorId error checking here, i.e. valid cnic
    if (cnic) {
      return true;
    } else {
      return false;
    }
  }
}

export default Doctor;