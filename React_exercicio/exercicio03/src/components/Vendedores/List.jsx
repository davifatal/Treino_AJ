import React, { useState } from 'react'

import VendedoresForm from './Form/Form'
import Modal from '../../components/common/Modal/Modal'
import Tabela from '../../components/common/Table/Table'
import Fab from '../../components/common/Fab'

const VendedoresList = props => {
  const [openModal, setOpenModal] = useState(false);
  const [createMode, setCreateMode] = useState(false);

  const handleEditBtn = () => {
    setCreateMode(false);
    setOpenModal(true);
  }

  const handleAddBtn = () => {
    setCreateMode(true);
    setOpenModal(true);
  }

  return <>
    <Tabela
      columns={['Código', 'Nome', 'Ativo']}
      onClickEdit={handleEditBtn}
    />

    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      onConfirm={console.log}
      title="Vendedor"
      createMode={createMode}
      confirmBtnTitle='Confirmar'
      confirmBtnLabel='edit'
    >
      <VendedoresForm
        createMode={createMode}
        handleChange={console.log}
      />
    </Modal>

    <div className="btnAdd">
      <Fab
        onClick={handleAddBtn}
        title="Adicionar"
        variant="round"
        size="small"
        label="add"
        color="primary"
        iconAdd={true}
      />
    </div>
  </>
}

export default VendedoresList