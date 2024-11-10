import React from 'react';
import { Grid } from '@mui/material';
import { reportsData } from '../data/reportsData';
import DataCard from 'entities/dataCard/ui/DataCard';

const ReportsList: React.FC = () => {
  return (
    <Grid className="p-2.5" container spacing={3}>
      {reportsData.map((report) => (
        <Grid item xs={12} sm={6} md={4} key={report.id}>
          <DataCard key={report.id} title="Отчет" data={report} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ReportsList;
