set -o errexit

pip install -requirements.txt

python manage.py collectstatic --no-inout
python manage.py migrate
