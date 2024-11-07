import React from 'react';
import { Grid } from '@mui/material';
import { reportsData } from '../data/reportsData';
import DataCard from 'shared/ui/DataCard';


const ReportPage: React.FC = () => {
  return (
    <Grid container spacing={3}>
      {reportsData.map((report) => (
        <Grid item xs={12} sm={6} md={4} key={report.id}>
          <DataCard
            title={`Отчет #${report.id}`}
            id={report.id}
            date={report.date}
            status={report.status}
            description={report.details} 
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ReportPage;
