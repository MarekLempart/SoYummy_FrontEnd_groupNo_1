// src/redux/recipesSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addFavoriteRecipe,
  addOwnRecipe,
  addProductToShoppingList,
  deleteOwnRecipe,
  getCategoryList,
  getFavoriteRecipes,
  getMainRecipesByCategory,
  getOwnRecipes,
  getPopularRecipes,
  getRecipeById,
  getRecipesByCategory,
  getShoppingList,
  removeFavoriteRecipe,
  removeProductFromShoppingList,
  searchRecipes,
} from "../API/api";

// Async Thunks

export const fetchMainRecipesByCategory = createAsyncThunk(
  "recipes/fetchMainByCategory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getMainRecipesByCategory();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchCategoryList = createAsyncThunk(
  "recipes/fetchCategoryList",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getCategoryList();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const searchRecipesThunk = createAsyncThunk(
  "recipes/search",
  async (query, { rejectWithValue }) => {
    try {
      const response = await searchRecipes(query);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchRecipesByCategory = createAsyncThunk(
  "recipes/fetchByCategory",
  async (category, { rejectWithValue }) => {
    try {
      const response = await getRecipesByCategory(category);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchRecipeById = createAsyncThunk(
  "recipes/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getRecipeById(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchPopularRecipes = createAsyncThunk(
  "recipes/fetchPopular",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getPopularRecipes();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchOwnRecipes = createAsyncThunk(
  "recipes/fetchOwnRecipes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getOwnRecipes();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addRecipe = createAsyncThunk(
  "recipes/addOwnRecipe",
  async (data, { rejectWithValue }) => {
    try {
      const response = await addOwnRecipe(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteRecipe = createAsyncThunk(
  "recipes/deleteOwnRecipe",
  async (id, { rejectWithValue }) => {
    try {
      await deleteOwnRecipe(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addToFavorites = createAsyncThunk(
  "recipes/addFavoriteRecipe",
  async (data, { rejectWithValue }) => {
    try {
      const response = await addFavoriteRecipe(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchFavoriteRecipes = createAsyncThunk(
  "recipes/fetchFavoriteRecipes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getFavoriteRecipes();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeFromFavorites = createAsyncThunk(
  "recipes/removeFavoriteRecipe",
  async (id, { rejectWithValue }) => {
    try {
      await removeFavoriteRecipe(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addProductToList = createAsyncThunk(
  "recipes/addProductToShoppingList",
  async (data, { rejectWithValue }) => {
    try {
      const response = await addProductToShoppingList(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeProductFromList = createAsyncThunk(
  "recipes/removeProductFromShoppingList",
  async (data, { rejectWithValue }) => {
    try {
      const response = await removeProductFromShoppingList(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchShoppingList = createAsyncThunk(
  "recipes/fetchShoppingList",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getShoppingList();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Slice

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
    categories: [],
    favorites: [],
    shoppingList: [],
    popularRecipes: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMainRecipesByCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMainRecipesByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recipes = action.payload;
      })
      .addCase(fetchMainRecipesByCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCategoryList.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(searchRecipesThunk.fulfilled, (state, action) => {
        state.recipes = action.payload;
      })
      .addCase(fetchRecipesByCategory.fulfilled, (state, action) => {
        state.recipes = action.payload;
      })
      .addCase(fetchRecipeById.fulfilled, (state, action) => {
        state.recipes = [action.payload]; // Assuming a single recipe is returned
      })
      .addCase(fetchPopularRecipes.fulfilled, (state, action) => {
        state.popularRecipes = action.payload;
      })
      .addCase(fetchOwnRecipes.fulfilled, (state, action) => {
        state.recipes = action.payload;
      })
      .addCase(addRecipe.fulfilled, (state, action) => {
        state.recipes.push(action.payload);
      })
      .addCase(deleteRecipe.fulfilled, (state, action) => {
        state.recipes = state.recipes.filter(
          (recipe) => recipe.id !== action.payload
        );
      })
      .addCase(fetchFavoriteRecipes.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      .addCase(addToFavorites.fulfilled, (state, action) => {
        state.favorites.push(action.payload);
      })
      .addCase(removeFromFavorites.fulfilled, (state, action) => {
        state.favorites = state.favorites.filter(
          (recipe) => recipe.id !== action.payload
        );
      })
      .addCase(fetchShoppingList.fulfilled, (state, action) => {
        state.shoppingList = action.payload;
      })
      .addCase(addProductToList.fulfilled, (state, action) => {
        state.shoppingList.push(action.payload);
      })
      .addCase(removeProductFromList.fulfilled, (state, action) => {
        state.shoppingList = state.shoppingList.filter(
          (item) => item.id !== action.payload.id
        );
      });
  },
});

export default recipesSlice.reducer;
