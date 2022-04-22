from django.test import TestCase

class URLTests(TestCase):
    def test_api(self):
        response = self.client.get('/api')
        self.assertEqual(response.status_code, 301)

