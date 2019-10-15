import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';

import api from '~/services/api';

import { Container } from './styles';

export default function BannerInput() {
  const { defaultValue, registerField } = useField('banner_id');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'banner_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    // cria um multpart formdata a adiciona o arquivo nele
    const data = new FormData();
    data.append('file', e.target.files[0]);

    const response = await api.post('/files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="banner">
        <img
          src={preview || `https://api.adorable.io/avatars/120/meetapp`}
          alt="Banner do Meetup"
        />

        <input
          type="file"
          id="banner"
          accept="image/*"
          onChange={handleChange}
          data-file={file}
          ref={ref}
        />
      </label>
    </Container>
  );
}
