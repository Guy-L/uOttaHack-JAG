package org.tensorflow.lite.examples.posenet.ui.tutors;

import android.content.Intent;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.RelativeLayout;
import android.widget.TextView;

import androidx.appcompat.widget.AppCompatImageView;
import androidx.appcompat.widget.AppCompatTextView;
import androidx.recyclerview.widget.RecyclerView;

import org.tensorflow.lite.examples.posenet.CameraActivity;
import org.tensorflow.lite.examples.posenet.R;

public class TutorListAdapter extends RecyclerView.Adapter<TutorListAdapter.MyViewHolder> {
    private String[] workoutNames;
    private String[] workoutSubtitles;
    private Integer[] workoutPictures;
    // Provide a reference to the views for each data item
    // Complex data items may need more than one view per item, and
    // you provide access to all the views for a data item in a view holder
    public static class MyViewHolder extends RecyclerView.ViewHolder {
        // each data item is just a string in this case
        public RelativeLayout view;
        public MyViewHolder(RelativeLayout v) {
            super(v);
            view = v;
        }
    }

    // Provide a suitable constructor (depends on the kind of dataset)
    public TutorListAdapter(String[] woNames, String[] woSubtitles, Integer[] woPics) {
        workoutNames = woNames;
        workoutSubtitles = woSubtitles;
        workoutPictures = woPics;
    }

    // Create new views (invoked by the layout manager)
    @Override
    public TutorListAdapter.MyViewHolder onCreateViewHolder(ViewGroup parent,
                                                            int viewType) {
        // create a new view
        RelativeLayout v = (RelativeLayout) LayoutInflater.from(parent.getContext())
                .inflate(R.layout.workout_view, parent, false);
        v.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v) {
                v.getContext().startActivity(new Intent(v.getContext(), CameraActivity.class));
            }
        });
        MyViewHolder vh = new MyViewHolder(v);
        return vh;
    }

    // Replace the contents of a view (invoked by the layout manager)
    @Override
    public void onBindViewHolder(MyViewHolder holder, int position) {
        // - get element from your dataset at this position
        // - replace the contents of the view with that element
        ((AppCompatTextView)holder.view.getChildAt(0)).setText(workoutNames[position]);
        ((AppCompatTextView)holder.view.getChildAt(1)).setText(workoutSubtitles[position]);
        ((AppCompatImageView)holder.view.getChildAt(2)).setImageResource(workoutPictures[position]);
    }

    // Return the size of your dataset (invoked by the layout manager)
    @Override
    public int getItemCount() {
        return workoutNames.length;
    }
}

