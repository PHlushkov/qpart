import React from "react";
import AppHeader from '../../widgets/header/ui/AppHeader';
import MachinesPage from "features/machines/components/MachinesPage";


function Machines() {
    return (
        <div>
            <AppHeader/>
            <div className='mt-24 text-center fs-'>
                <h2 className="font-bold text-lg">Список станков</h2>
                <MachinesPage/>
            </div>
        </div>
    )
}


export default Machines;