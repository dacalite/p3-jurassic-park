import axios from 'axios';
import { SetStateAction, useEffect, useRef, useState } from 'react';

type AuditLogLevel = 'INFO' | 'ERROR';

interface AuditLog {
  id: number;
  message: string;
  level: AuditLogLevel;
  timestamp: string;
}

function Dashboard() {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <h1>JURASSIC PARK</h1>
    </div>
  );
}

export default Dashboard;
