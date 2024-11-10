import React from "react";
import AppHeader from '../../widgets/header/ui/AppHeader';
import MachinesList from "features/machines/components/MachinesList";


function Machines() {
    return (
        <div>
            <AppHeader/>
            <div className='mt-24 text-center fs-'>
                <h2 className="font-bold text-lg">Список станков</h2>
                <MachinesList/>
            </div>
        </div>
    )
}


export default Machines;