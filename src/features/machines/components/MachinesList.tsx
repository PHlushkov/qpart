import React from 'react';
import { Grid } from '@mui/material';
import { machinesData } from '../data/machinesData';
import DataCard from 'entities/dataCard/ui/DataCard';


const MachinesList: React.FC = () => {
  return (
    <Grid className='p-2.5' container spacing={3}>
      {machinesData.map((machine) => (
        <Grid item xs={12} sm={6} md={4} key={machine.id}>
        <DataCard key={machine.id} title="Станок" data={machine} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MachinesList;
