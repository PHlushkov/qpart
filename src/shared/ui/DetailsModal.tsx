import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';

interface MachineData {
  id: number;
  name?: string;
  model?: string;
  location?: string;
  status?: string;
  lastMaintenance?: string;
  operator?: string;
  hoursWorked?: number;
  description?: string;
  date?: string;
  author?: string;
  details?: string;
  durationHours?: number;
  priority?: string;
}

interface DetailsModalProps {
  open: boolean;
  onClose: () => void;
  data: MachineData;
}

const DetailsModal: React.FC<DetailsModalProps> = ({ open, onClose, data }) => {
  const fields = [
    { label: 'ID', value: data.id },
    { label: 'Дата', value: data.date },
    { label: 'Статус', value: data.status },
    { label: 'Станок', value: data.name },
    { label: 'Модель', value: data.model },
    { label: 'Цех', value: data.location },
    { label: 'Описание', value: data.description },
    { label: 'Оператор', value: data.operator },
    { label: 'Часы работы', value: data.hoursWorked },
    { label: 'Автор', value: data.author },
    { label: 'Детали', value: data.details },
    { label: 'Продолжительность', value: data.durationHours ? `${data.durationHours} ч.` : undefined },
    { label: 'Приоритет', value: data.priority },
    { label: 'Последнее обслуживание', value: data.lastMaintenance }
  ];

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Детальная информация</DialogTitle>
      <DialogContent>
        {fields.map(({ label, value }) => 
          value ? (
            <Typography key={label} variant="body1">
              {label}: {value}
            </Typography>
          ) : null
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Закрыть
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DetailsModal;
