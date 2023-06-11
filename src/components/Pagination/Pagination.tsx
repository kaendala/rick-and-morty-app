import { ConfigProvider, Pagination, theme } from 'antd';

type PaginationProps = {
  total: number;
  defaultPageSize: number;
  showSizeChanger: boolean;
  change: (e: number) => void;
  current: number;
};
const PaginationComp = ({
  total,
  defaultPageSize,
  showSizeChanger,
  change,
  current,
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
        current={current}
      />
    </ConfigProvider>
  );
};

export default PaginationComp;
