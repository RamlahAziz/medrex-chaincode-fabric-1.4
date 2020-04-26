package chaincode

import (
	"time"
)

type SmartContract struct {
}

type user struct {
	Pid   string `json:"pid"`
	Fname string `json:"fname"`
	Lname string `json:"lname"`
	Sex   string `json:"sex"`
	Dob   string `json:"dob"`
	Email string `json:"email"`
	Cnic  string `json:"cnic"`
}

type emr struct {
	Mrn        string    `json:"mrn"`        //must be unique
	CreatedAt  time.Time `json:"created_at"` //creation time
	Cid        string    `json:"cid"`        //consultant id
	Pid        string    `json:"pid"`        //patient id
	Hist       string    `json:"history"`    //history of illness
	Meds       string    `json:"meds"`       //medication
	Alergies   string    `json:"alergies"`   //alergies
	Shist      string    `json:"shist"`      //social history
	Bt         string    `json:"bt"`         //body temp
	Bp         string    `json:"bp"`         //blood pressure
	Hr         string    `json:"hr"`         //heart rate
	Rr         string    `json:"rr"`         //respiratory rate
	Extranotes string    `json:"extranotes"` //extra notes for doctor
	Labs       string    `json:"labs"`       //labs prescribed
	Assesment  string    `json:"assesment"`  //assesment of the diagnosis
	Plan       string    `json:"plan"`       //course of action
}
