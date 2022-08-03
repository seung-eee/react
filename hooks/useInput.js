import { useState, useCallback } from 'react';

export default (initialValue = null) => {
  // 커스텀 훅으로 만들어서 범용적으로 사용할 수 있도록 함
  const [value, setValue] = useState(initialValue);

  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, handler];
}