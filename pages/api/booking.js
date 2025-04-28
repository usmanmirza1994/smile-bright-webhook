export default function handler(req, res) {
    if (req.method === 'POST') {
      const bookingData = req.body;
  
      console.log('Received Booking Data:', bookingData);
  
      return res.status(200).json({ message: 'Booking received successfully!' });
    } else {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  