import PropTypes from 'prop-types';
import { Table } from 'antd';

const TableComponent = ({ dataSource, columns }) => {
  return <Table dataSource={dataSource} columns={columns} />;
};

TableComponent.propTypes = {
  dataSource: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      dataIndex: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired
    })
  )
};

export default TableComponent;
