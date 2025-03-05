const generateId = () => {
    const date = new Date();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    return `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}-${randomNum}`;
  };
  
  const randomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().split('T')[0];
  };
  
  const generatePatients = (count) => {
    const patients = [];
    for (let i = 0; i < count; i++) {
      patients.push({
        Id: generateId(),
        "Name: First": `Patient${i + 1}`,
        "Name: Last": `LastName${i + 1}`,
        "Contacts: EMAIL": `patient${i + 1}@example.com`,
        "Contacts: PHONE": `${Math.floor(1000000000 + Math.random() * 9000000000)}`,
        GENDER: Math.random() > 0.5 ? 'M' : 'F',
        "Contacts: ADDRESS": `${Math.floor(10000 + Math.random() * 90000)}, City, Street, Building`,
        "START DATE (checkin)": randomDate(new Date(2023, 0, 1), new Date()),
        "END DATE (discharged)": randomDate(new Date(), new Date(2025, 11, 31)),
        "AREA OF CONCERN": "Sample concern",
        DIAGNOSIS: "Sample diagnosis",
        STATUS: ["Life Support", "Discharged", "Report pending", "In recovery"][Math.floor(Math.random() * 4)],
        ACTIVITIES: "Sample activities",
        Room: `${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${Math.floor(100 + Math.random() * 900)}`,
        "Vitals: blood glucose level": `${Math.floor(70 + Math.random() * 130)} mg/dL`,
        "Vitals: Weight": `${Math.floor(50 + Math.random() * 100)} kg`,
        "Vitals: Heart rate": `${Math.floor(60 + Math.random() * 40)} bpm`,
        "Vitals: Oxygen saturation": `${Math.floor(95 + Math.random() * 5)}%`,
        "Vitals: Body temperature": `${(36 + Math.random() * 2).toFixed(1)}°C`,
        "Vitals: blood pressure": `${Math.floor(110 + Math.random() * 40)}/${Math.floor(70 + Math.random() * 20)} mmHg`,
        "Vitals: other": "Sample other vitals",
        Medications: "Sample medications",
        "Routine medicine": "Sample routine medicine",
        Emergency: "Sample emergency info",
        "Test reports": `${randomDate(new Date(2023, 0, 1), new Date())}. Sample test type.`,
        "Test reports Conclusion": "Sample conclusion"
      });
    }
    return patients;
  };
  
  const generateStaff = (count) => {
    const staffTypes = [
      "Doctor", "Nurse", "Specialist Nurse", "Nurse's Assistant", "Doctor's Assistant",
      "Dentist", "Radiologist", "Physiotherapist", "Occupational Therapist", "Midwife"
    ];
    const staff = [];
    for (let i = 0; i < count; i++) {
      staff.push({
        Id: generateId(),
        "Name: First": `Staff${i + 1}`,
        "Name: Last": `LastName${i + 1}`,
        "Contacts: EMAIL": `staff${i + 1}@example.com`,
        "Contacts: PHONE": `${Math.floor(1000000000 + Math.random() * 9000000000)}`,
        "Contacts: Department": `Department${Math.floor(Math.random() * 5) + 1}`,
        "Contacts: Status": staffTypes[Math.floor(Math.random() * staffTypes.length)],
        "Contacts: Team": `Team${Math.floor(Math.random() * 10) + 1}`,
        "Task: to do": "Sample task",
        "Task: deadline": randomDate(new Date(), new Date(2025, 11, 31)),
        "Task: status": ["done", "not done", "in progress"][Math.floor(Math.random() * 3)],
        "Task: type": Math.random() > 0.5 ? "administrative" : "patients related"
      });
    }
    return staff;
  };
  
  const patientsData = generatePatients(50);
  const staffData = generateStaff(30);
  
  console.log("Patients Data:", patientsData);
  console.log("Staff Data:", staffData);