import React, { forwardRef, Ref, ChangeEvent } from 'react';
import classes from './tag-field-set.module.scss';
import TagField from '../tag-field';

interface Props {
  className?: string;
  tagsInfo: Map<number, string>;
  addTag?: () => void;
  deleteTag?: (key: number) => void;
  changeTag?: (key: number, value: string) => void;
  ref: Ref<HTMLInputElement>;
}

const TagFieldSet = forwardRef<HTMLInputElement, Props>(
  ({ className = '', addTag, deleteTag, tagsInfo, changeTag }, ref) => {
    const keysArr = Array.from(tagsInfo.keys());

    const onChangeCreator = (key: number) => {
      if (changeTag) {
        return (evt: ChangeEvent<HTMLInputElement>) => {
          changeTag(key, evt.target.value);
        };
      }

      return () => {};
    };

    const onDeleteCreator = (key: number) => {
      if (deleteTag) {
        return () => {
          deleteTag(key);
        };
      }

      return () => {};
    };

    const tags = keysArr.map((key, i, arr) => (
      <TagField
        key={key}
        className={classes.tag}
        signature={i === 0 ? 'Tags' : ''}
        isLast={i === arr.length - 1}
        mayBeDeleted={arr.length > 1}
        value={tagsInfo.get(key)}
        ref={ref}
        onChange={onChangeCreator(key)}
        onDelete={onDeleteCreator(key)}
        onAdd={addTag}
      />
    ));

    return <div className={className}>{tags}</div>;
  }
);

export default TagFieldSet;
