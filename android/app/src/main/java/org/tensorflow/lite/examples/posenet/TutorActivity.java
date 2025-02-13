package org.tensorflow.lite.examples.posenet;

import android.os.Bundle;
import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.android.material.snackbar.Snackbar;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import android.view.View;
import org.tensorflow.lite.examples.posenet.ui.tutors.TutorListAdapter;

public class TutorActivity extends AppCompatActivity {
    private RecyclerView recyclerView;
    private RecyclerView.Adapter mAdapter;
    private RecyclerView.LayoutManager layoutManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_tutor);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, "Saving feature coming soon!", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });

        recyclerView = findViewById(R.id.browse_list);

        // use this setting to improve performance if you know that changes
        // in content do not change the layout size of the RecyclerView
        recyclerView.setHasFixedSize(true);

        // use a linear layout manager
        layoutManager = new LinearLayoutManager(this);
        recyclerView.setLayoutManager(layoutManager);

        // specify an adapter (see also next example)
        mAdapter = new TutorListAdapter(new String[]{"Warrior Pose", "Squats", "Push Ups", "Jumping Jacks", "More Workouts", "Workout 6", "Workout 7", "Ultimate Workout"},
                                        new String[]{"Hold for 30s", "5reps, ×10", "5reps, ×10", "10reps, ×5", "More to come!", "More to come!", "More to come!", "The final frontier."},
                                        new Integer[]{R.drawable.warrior, R.drawable.squats, R.drawable.pushup, R.drawable.jumping, R.drawable.question, R.drawable.question, R.drawable.question, R.drawable.exclamation});
        recyclerView.setAdapter(mAdapter);
    }
}
