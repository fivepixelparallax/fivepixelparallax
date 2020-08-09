import React from 'react';
import Main from '../../components/Main/Main';
import PageHeader from '../../components/PageHeader/PageHeader';
import BlogRoll from '../../components/BlogRoll/BlogRoll';

export default class BlogIndexPage extends React.Component {
    render() {
        return (
            <Main isLanding={ false }>
                <PageHeader backgroundImage={ '/img/blog-index.jpg' } title={ 'Latest Stories' } />
                <section className="section">
                    <div className="container">
                        <div className="content">
                            <BlogRoll />
                        </div>
                    </div>
                </section>
            </Main>
        )
    }
}
