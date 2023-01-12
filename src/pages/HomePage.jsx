import { useEffect } from 'react'
import { Col, Row, Typography } from 'antd'

import { fetchGetBooksList } from '../api/books'

import Table from '../components/TableComponent'

const { Title, Paragraph } = Typography

const Home = () => {
  useEffect(() => {
    fetchGetBooksList()
  }, [])

  const dataSource = [
    {
      id: 1,
      title: 'Harry Potter and the Half-Blood Prince (Harry Potter  #6)',
      authors: 'J.K. Rowling/Mary GrandPré',
      average_rating: '4.57',
      isbn: '439785960',
      isbn13: '9780439785969',
      language_code: 'eng',
      num_pages: 652,
      publication_date: '9/16/2006',
      publisher: 'Scholastic Inc.'
    }
  ]

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'title',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'authors',
      dataIndex: 'authors',
      key: 'authors'
    },
    {
      title: 'average_rating',
      dataIndex: 'average_rating',
      key: 'average_rating'
    },
    {
      title: 'isbn',
      dataIndex: 'isbn',
      key: 'isbn'
    },
    {
      title: 'isbn13',
      dataIndex: 'isbn13',
      key: 'isbn13'
    },
    {
      title: 'language_code',
      dataIndex: 'language_code',
      key: 'language_code'
    },
    {
      title: 'num_pages',
      dataIndex: 'num_pages',
      key: 'num_pages'
    },
    {
      title: 'publication_date',
      dataIndex: 'publication_date',
      key: 'publication_date'
    },
    {
      title: 'publisher',
      dataIndex: 'publisher',
      key: 'publisher'
    }
  ]

  return (
    <>
      <Row justify='center'>
        <Col span={20}>
          <Typography>
            <Title>Lista de libros</Title>
            <Paragraph>
              Lista de libros disponibles para la venta
            </Paragraph>
          </Typography>
        </Col>
      </Row>

      <Row justify='center'>
        <Col span={20}>
          <Table dataSource={dataSource} columns={columns} />
        </Col>
      </Row>
    </>
  )
}

export default Home
