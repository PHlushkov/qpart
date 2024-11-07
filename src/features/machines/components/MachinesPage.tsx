import React from 'react';
import { Grid } from '@mui/material';
import { machinesData } from '../data/machinesData';
import DataCard from 'shared/ui/DataCard';


const MachinesPage: React.FC = () => {
  return (
    <Grid container spacing={3}>
      {machinesData.map((machine) => (
        <Grid item xs={12} sm={6} md={4} key={machine.id}>
          <DataCard
            title={`Станок #${machine.id}`}
            id={machine.id}
            name={machine.name}
            model={machine.model}
            description={machine.description}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MachinesPage;
