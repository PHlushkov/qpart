import React from 'react';
import AppHeader from '../../widgets/header/ui/AppHeader';
import ReportsList from 'features/reports/components/ReportsList';

function ReportPage() {
  return (
    <div>
      <AppHeader />
      <div className="mt-24 text-center fs-">
        <h2 className="font-bold text-lg">Список отчетов</h2>
        <ReportsList />
      </div>
    </div>
  );
}

export default ReportPage;
