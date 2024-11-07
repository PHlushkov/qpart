import React, { useState } from 'react';
import { Card, CardContent, Typography, CardActions, Button, Box, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

interface DataCardProps {
  title: string;
  description?: string; 
  onClick?: () => void;

  id: string | number;
  date?: string;  
  status?: string;  
  name?: string;  
  model?: string;  
}

const DataCard: React.FC<DataCardProps> = ({ title, description, onClick, id, date, status, name, model }) => {
  const [openModal, setOpenModal] = useState(false); 

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345, margin: 2 }} onClick={onClick}>
        <CardContent>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Box mt={2}>
            <Typography variant="body2" color="text.primary">
              ID: {id}
            </Typography>
            {status && (
              <Typography variant="body2" color="text.primary">
                Статус: {status}
              </Typography>
            )}
            {date && (
              <Typography variant="body2" color="text.primary">
                Дата: {date}
              </Typography>
            )}
            {name && (
              <Typography variant="body2" color="text.primary">
                Станок: {name}
              </Typography>
            )}
            {model && (
              <Typography variant="body2" color="text.primary">
                Модель: {model}
              </Typography>
            )}
          </Box>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={handleOpenModal}>
            Подробнее
          </Button>
        </CardActions>
      </Card>
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Детальная информация</DialogTitle>
        <DialogContent>
          <Typography variant="h6">ID: {id}</Typography>
          {date && <Typography variant="body1">Дата: {date}</Typography>}
          {status && <Typography variant="body1">Статус: {status}</Typography>}
          {name && <Typography variant="body1">Станок: {name}</Typography>}
          {model && <Typography variant="body1">Модель: {model}</Typography>}
          {description && <Typography variant="body1">Описание: {description}</Typography>}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DataCard;
