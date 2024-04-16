describe('JSONPlaceholder API Tests', () => {
    // Store the created post ID for later use
    let createdPostId;
    const baseURL = 'https://jsonplaceholder.typicode.com/posts'

    it('should fetch and verify a list of posts', () => {
        cy.request('GET', baseURL)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.not.be.empty;
                expect(response.body).to.be.an('array');
                expect(response.body.length).to.be.greaterThan(0);
                cy.log('First post:', JSON.stringify(response.body[0], null, 2));
            });
    });

    it('should create a new post', () => {
        const newPost = {
            title: 'Test Post',
            body: 'This is a test post',
            userId: 1, // Assuming userId is required
        };

        cy.request('POST', baseURL, newPost)
            .then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body).to.not.be.empty;
                expect(response.body).to.have.property('id');
                createdPostId = response.body.id; // Store the created post ID
                cy.log('Created post:', JSON.stringify(response.body, null, 2));
            });
    });

    it('should update an existing post', () => {
        const postIdToUpdate = 1; // ID of the post you want to update
        const updatedPostData = {
            title: 'Updated Title',
            body: 'Updated Body',
            userId: 1, // Assuming userId is required
        };

        cy.request('PUT', `${baseURL}/${postIdToUpdate}`, updatedPostData)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.not.be.empty;
                expect(response.body).to.deep.equal({ ...updatedPostData, id: postIdToUpdate });
                cy.log('Created post:', JSON.stringify(response.body, null, 2));
            });
    });


    it('should delete the created post', () => {
        cy.request('DELETE', `${baseURL}/${createdPostId}`)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.deep.equal({});
                cy.log('Created post:', JSON.stringify(response.body, null, 2));
            });
    });
});
