import React, { FC } from 'react';
import { Button as AntdButton } from 'antd';
import { useForm } from 'react-hook-form';
import classes from './article-form.module.scss';
import TextInput from '../text-input';
import TextArea from '../text-area';
import TagFieldSet from '../tag-field-set';
import { ArticleFormSubmitDataType } from '../../types';
import * as Helper from '../../helper';

interface Props {
  onSubmit: (data: ArticleFormSubmitDataType) => void;
  addTag: () => void;
  deleteTag: (key: number) => void;
  changeTag: (key: number, value: string) => void;
  tagsInfo: Map<number, string>;
  defaultTitle: string;
  defaultDescription: string;
  defaultBody: string;
}

const ArticleForm: FC<Props> = ({
  onSubmit,
  addTag,
  deleteTag,
  changeTag,
  tagsInfo,
  defaultTitle,
  defaultDescription,
  defaultBody,
}) => {
  const { register, errors, handleSubmit } = useForm<ArticleFormSubmitDataType>();

  const titleClasses = [classes.textInput];
  const descriptionClasses = [classes.textInput];
  const bodyClasses = [classes.textInput];

  if (errors.title) {
    titleClasses.push(classes.textInputError);
  }
  if (errors.description) {
    descriptionClasses.push(classes.textInputError);
  }
  if (errors.body) {
    bodyClasses.push(classes.textAreaError);
  }

  const errorMessages = Helper.getErrorMessages(errors as Helper.Errors);

  return (
    <form className={classes.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        className={titleClasses.join(' ')}
        name="title"
        type="text"
        signature="Title"
        placeholder="Title"
        defaultValue={defaultTitle}
        ref={register({ required: true })}
      />
      {errors.title && <span className={classes.errorMessage}>{errorMessages.get('title')}</span>}
      <TextInput
        className={descriptionClasses.join(' ')}
        name="description"
        type="text"
        signature="Short description"
        placeholder="Some short description that displays in atricles list"
        defaultValue={defaultDescription}
        ref={register({ required: true })}
      />
      {errors.description && (
        <span className={classes.errorMessage}>{errorMessages.get('description')}</span>
      )}
      <TextArea
        className={bodyClasses.join(' ')}
        name="body"
        signature="Text"
        placeholder="Text"
        defaultValue={defaultBody}
        ref={register({ required: true })}
      />
      {errors.body && <span className={classes.errorMessage}>{errorMessages.get('body')}</span>}
      <TagFieldSet
        className={classes.tags}
        tagsInfo={tagsInfo}
        addTag={addTag}
        deleteTag={deleteTag}
        changeTag={changeTag}
      />
      <AntdButton className={classes.btn} type="primary" htmlType="submit">
        Send
      </AntdButton>
    </form>
  );
};

export default ArticleForm;
