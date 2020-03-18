import styled from 'styled-components';

export const FourColumns = styled.div`
 flex: 0 0 33.33333%;
    max-width: 33.33333%;
`;

export const ThreeColumns = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
`;

export const AutoColumn = styled.div`
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
`;

export const ColumnList = styled(AutoColumn)`
  padding-left: 0;
  padding-right: 0;
  margin-right: 0.5rem;
  margin-left: 0;
  flex-wrap: wrap;
`;

export const FormControl = styled.textarea`
  background-clip: padding-box;
  background-color: #fff;
  border-radius: 0.25rem;
  border: 1px solid #ced4da;
  color: #495057;
  display: block;
  font-size: 1rem;
  font-weight: 400;
  height: calc(1.5em + 0.75rem + 2px);
  line-height: 1.5;
  padding: 0.375rem 0.75rem;
  width: 100%;
`;
