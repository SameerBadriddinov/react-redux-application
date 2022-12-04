import {useSelector} from 'react-redux'
import {Input, TextArea} from '../ui'

const ArticleForm = props => {
	const {isLoading} = useSelector(state => state.article)
	const {title, setTitle, description, setDescription, body, setBody, formSubmit} = props

	return (
		<form onSubmit={formSubmit}>
			<Input label={'Title'} state={title} setState={setTitle} />
			<TextArea label={'Description'} state={description} setState={setDescription} />
			<TextArea label={'Body'} state={body} setState={setBody} height={'300px'} />
			<button className='w-100 btn btn-lg btn-primary mt-2' disabled={isLoading} type='submit'>
				{isLoading ? 'Loading...' : 'Create'}
			</button>
		</form>
	)
}

export default ArticleForm
