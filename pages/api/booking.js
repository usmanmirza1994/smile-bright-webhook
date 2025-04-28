export default function handler(req, res) {
  if (req.method === 'POST') {
    const { patient_firstname, patient_lastname, appointment_date, appointment_time } = req.body;

    if (!patient_firstname || !patient_lastname || !appointment_date || !appointment_time) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    console.log('Received booking:', {
      patient_firstname,
      patient_lastname,
      appointment_date,
      appointment_time
    });

    return res.status(200).json({
      message: 'Booking webhook received successfully',
      data: {
        patient_firstname,
        patient_lastname,
        appointment_date,
        appointment_time
      }
    });
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
