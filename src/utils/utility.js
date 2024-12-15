import { useEffect } from "react";
import axios from 'axios';

async function getticket() {
    try {
      const response = await axios.get('http://localhost:5000/');
      return response.data.data || [];
    } catch (error) {
      console.error(error + "444444444");
      return []; 
    }
  }