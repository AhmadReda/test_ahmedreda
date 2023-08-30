from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in test_ahmedreda/__init__.py
from test_ahmedreda import __version__ as version

setup(
	name="test_ahmedreda",
	version=version,
	description="This App for Brandmic Company Task",
	author="Ahmed Reda",
	author_email="ahmedreda.abdelsattar@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
