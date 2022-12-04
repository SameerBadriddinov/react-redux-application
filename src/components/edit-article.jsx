import {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import ArticleService from '../service/article'
import {
	getArticleDetailFailure,
	getArticleDetailStart,
	getArticleDetailSuccess,
	postArticleFailure,
	postArticleStart,
	postArticleSuccess,
} from '../slice/article'
import ArticleForm from './article-form'

const EditArticle = () => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [body, setBody] = useState('')
	const dispatch = useDispatch()
	const {slug} = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		const getArticleDetail = async () => {
			dispatch(getArticleDetailStart())
			try {
				const response = await ArticleService.getArticleDetail(slug)
				setTitle(response.article.title)
				setDescription(response.article.description)
				setBody(response.article.body)
				dispatch(getArticleDetailSuccess(response.article))
			} catch (error) {
				dispatch(getArticleDetailFailure())
			}
		}

		getArticleDetail()
	}, [])

	const formSubmit = async e => {
		e.preventDefault()
		const article = {title, description, body}
		dispatch(postArticleStart())
		try {
			await ArticleService.editArticle(slug, article)
			dispatch(postArticleSuccess())
			navigate('/')
		} catch (error) {
			dispatch(postArticleFailure())
		}
	}

	const formProps = {title, setTitle, description, setDescription, body, setBody, formSubmit}

	return (
		<div className='text-center'>
			<h1 className='fs-2'>Edit article</h1>
			<div className='w-75 mx-auto'>
				<ArticleForm {...formProps} />
			</div>
		</div>
	)
}

export default EditArticle
