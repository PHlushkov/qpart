import React from 'react'
import AppHeader from '../../widgets/header/ui/AppHeader';
import ReportCard from 'features/reports/components/ReportCard';


function ReportPage() {
    return (
        <div>
            <AppHeader/>
            <div className='mt-20 text-center fs-'>
                <h2>Список отчетов</h2>
                <ReportCard/>
            </div>
        </div>
    )
}


export default ReportPage