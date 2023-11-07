import React from 'react';

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <div style={styles.logo}>
        {/* Coloque aqui o componente ou imagem da logo */}
        Logo
      </div>
      <div style={styles.menuItems}>
        <div style={styles.menuItem}>Dashboard</div>
        <div style={styles.menuItem}>Chat</div>
        <div style={styles.menuItem}>Fichas</div>
      </div>
      <div style={styles.logoutButton}>Sair</div>
    </div>
  );
};

const styles = {
  sidebar: {
    width: '200px',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px',
  },
  logo: {
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  menuItems: {
    display: 'flex',
    flexDirection: 'column',
  },
  menuItem: {
    marginBottom: '10px',
    cursor: 'pointer',
  },
  logoutButton: {
    marginTop: 'auto',
    cursor: 'pointer',
  },
};

export default Sidebar;
