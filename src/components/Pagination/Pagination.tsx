import { ConfigProvider, Pagination, theme } from 'antd';

type PaginationProps = {
  total: number;
  defaultPageSize: number;
  showSizeChanger: boolean;
  change: (e: number) => void;
};
const PaginationComp = ({
  total,
  defaultPageSize,
  showSizeChanger,
  change,
}: PaginationProps) => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}>
      <Pagination
        total={total}
        defaultPageSize={defaultPageSize}
        showSizeChanger={showSizeChanger}
        onChange={change}
      />
    </ConfigProvider>
  );
};

export default PaginationComp;
