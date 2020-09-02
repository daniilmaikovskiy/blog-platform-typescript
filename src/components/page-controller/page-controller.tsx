import React, { FC } from 'react';
import { Pagination } from 'antd';

type Props = {
  total?: number;
  current?: number;
  className?: string;
  onChange?: (page: number, pageSize?: number | undefined) => void;
};

const PageController: FC<Props> = ({ total = 0, current = 0, onChange, className }) => {
  return (
    <Pagination
      size="small"
      pageSize={1}
      total={total}
      showSizeChanger={false}
      onChange={onChange}
      current={current}
      className={className}
    />
  );
};

export default PageController;
