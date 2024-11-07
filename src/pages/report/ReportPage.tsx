import React from 'react'
import AppHeader from '../../widgets/header/ui/AppHeader';
import ReportCard from 'features/reports/components/ReportCard';


function ReportPage() {
    return (
        <div>
            <AppHeader/>
            <div className='mt-24 text-center fs-'>
                <h2 className='font-bold text-lg'>Список отчетов</h2>
                <ReportCard/>
            </div>
        </div>
    )
}


export default ReportPage