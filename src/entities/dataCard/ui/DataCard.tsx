import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from '@mui/material';

import { DataCardProps } from 'entities/types/DataCardProps';
import DetailsModal from 'shared/ui/DetailsModal';

const DataCard: React.FC<DataCardProps> = ({ title, data }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <Card>
        <CardContent sx={{ padding: '50px' }}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Box mt={2}>
            <Typography variant="body2" color="text.primary">
              ID: {data.id}
            </Typography>
            {data.name && (
              <Typography variant="body2" color="text.primary">
                Станок: {data.name}
              </Typography>
            )}
            {data.model && (
              <Typography variant="body2" color="text.primary">
                Модель: {data.model}
              </Typography>
            )}
            {data.date && (
              <Typography variant="body2" color="text.primary">
                Дата: {data.date}
              </Typography>
            )}
            {data.status && (
              <Typography variant="body2" color="text.primary">
                Статус: {data.status}
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

      <DetailsModal open={openModal} onClose={handleCloseModal} data={data} />
    </>
  );
};

export default DataCard;
