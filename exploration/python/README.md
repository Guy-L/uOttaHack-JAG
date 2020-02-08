# Python Exploration

## Local Setup
1. Install Anaconda if you don't have it
    https://www.anaconda.com/distribution/#download-section
2. Install Jupyter Lab if you don't have it
  
   ```
   conda install -c conda-forge jupyterlab
   ```
3. Load the conda env file 

   ```
   conda env create -f environment.yml
   ```

## Conda

### Update the Conda Env File

If changes were made to environment.yml, you can update the env

```
conda env update --prefix ./env --file environment.yml  --prune
```

### Saving the Conda Env File

If you use pip or conda install, you should update the env file

```
activate uOttaHack
conda env export > environment.yml
```
