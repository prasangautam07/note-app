set -o errexit

pip install -r requirements.txt

python manage.py collectstatic --no-inout
python manage.py migrate
